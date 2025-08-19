#!/usr/bin/env ts-node

import { PrismaClient, TypeEvaluation } from '@prisma/client';

const prisma = new PrismaClient();

// Fonction pour générer une note aléatoire entre min et max
function generateRandomNote(min: number = 10, max: number = 17): number {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100; // 2 décimales
}

// Fonction pour générer une date d'évaluation aléatoire dans l'année scolaire
function generateRandomDate(): Date {
  const start = new Date('2024-09-01'); // Début année scolaire
  const end = new Date('2025-06-30');   // Fin année scolaire
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

async function generateNotesForAllStudents() {
  console.log('🚀 Démarrage de la génération des notes...');

  // supprimer les notes existantes
  const deleteMany = await prisma.noteEtudiant.deleteMany({});

  if(deleteMany.count > 0) {
    console.log('🚀 Suppression des notes ☑️ ...');
  }

  try {
    // 1. Récupérer tous les étudiants
    const etudiants = await prisma.etudiant.findMany({
      include: {
        profile: true, // Inclure le profil pour accéder aux noms
        inscriptions: {
          include: {
            classe: {
              include: {
                uniteEnseignements: {
                  include: {
                    matieres: {
                      include: {
                        cours: true
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    console.log(`📚 Trouvé ${etudiants.length} étudiants`);

    let totalEvaluationsCreated = 0;
    let totalNotesCreated = 0;

    // 2. Pour chaque étudiant
    for (const etudiant of etudiants) {
      console.log(`\n👨‍🎓 Traitement de l'étudiant: ${etudiant.profile?.prenom} ${etudiant.profile?.nom}`);

      // Parcourir ses inscriptions
      for (const inscription of etudiant.inscriptions) {
        const classe = inscription.classe;
        console.log(`   📖 Classe: ${classe.nom}`);

        // Parcourir les UE de la classe
        for (const ue of classe.uniteEnseignements) {
          console.log(`     📊 UE: ${ue.code} - ${ue.nom}`);

          // Parcourir les matières de l'UE
          for (const matiere of ue.matieres) {
            console.log(`       📝 Matière: ${matiere.code} - ${matiere.nom}`);

            // Parcourir les cours de la matière
            for (const cours of matiere.cours) {
              console.log(`         🎯 Cours: ${cours.nom}`);

              // Créer des évaluations CC et EXAMEN pour ce cours
              const evaluationTypes: TypeEvaluation[] = ['CONTROLE_CONTINU', 'EXAMEN'];

              for (const typeEval of evaluationTypes) {
                // Vérifier si l'évaluation existe déjà pour ce cours et ce type
                const existingEvaluation = await prisma.evaluationEtudiants.findFirst({
                  where: {
                    coursId: cours.id,
                    typeEvaluation: typeEval,
                  }
                });

                let evaluation;
                if (existingEvaluation) {
                  evaluation = existingEvaluation;
                  console.log(`           ♻️  Évaluation ${typeEval} existante trouvée`);
                } else {
                  // Créer une nouvelle évaluation
                  evaluation = await prisma.evaluationEtudiants.create({
                    data: {
                      typeEvaluation: typeEval,
                      dateEvaluation: generateRandomDate(),
                      duree: typeEval === 'CONTROLE_CONTINU' ? 2 : 3, // CONTROLE_CONTINU: 2h, EXAMEN: 3h
                      document: `evaluation-${cours.id}-${typeEval.toLowerCase()}.pdf`,
                      description: `${typeEval} - ${cours.nom}`,
                      coursId: cours.id,
                    }
                  });
                  
                  totalEvaluationsCreated++;
                  console.log(`           ✅ Évaluation ${typeEval} créée`);
                }

                // Vérifier si la note existe déjà pour cet étudiant et cette évaluation
                const existingNote = await prisma.noteEtudiant.findFirst({
                  where: {
                    evaluationEtudiantId: evaluation.id,
                    etudiantId: etudiant.id,
                  }
                });

                if (!existingNote) {
                  // Générer une note aléatoire entre 10 et 17
                  const note = generateRandomNote(10, 17);

                  // Créer la note pour l'étudiant
                  await prisma.noteEtudiant.create({
                    data: {
                      note: note,
                      evaluationEtudiantId: evaluation.id,
                      etudiantId: etudiant.id,
                    }
                  });

                  totalNotesCreated++;
                  console.log(`           📊 Note créée: ${note}/20 (${typeEval})`);
                } else {
                  console.log(`           ↩️  Note ${typeEval} existante: ${existingNote.note}/20`);
                }
              }
            }
          }
        }
      }
    }

    console.log('\n🎉 Génération des notes terminée !');
    console.log(`📈 Statistiques:`);
    console.log(`   - Étudiants traités: ${etudiants.length}`);
    console.log(`   - Nouvelles évaluations créées: ${totalEvaluationsCreated}`);
    console.log(`   - Nouvelles notes créées: ${totalNotesCreated}`);

  } catch (error) {
    console.error('❌ Erreur lors de la génération des notes:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Script principal
async function main() {
  console.log('='.repeat(60));
  console.log('🎓 GÉNÉRATEUR DE NOTES ALÉATOIRES - ISCOM');
  console.log('='.repeat(60));
  
  try {
    await generateNotesForAllStudents();
    console.log('\n✅ Script terminé avec succès !');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Erreur fatale:', error);
    process.exit(1);
  }
}

// Exécution du script si appelé directement
if (require.main === module) {
  main();
}

export { generateNotesForAllStudents };
