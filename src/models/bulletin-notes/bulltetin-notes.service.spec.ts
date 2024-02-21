import { Test, TestingModule } from '@nestjs/testing';
import { BulletinNotesService } from './bulletin-notes.service';
import { FindUniqueBulletinNotesArgs } from './dtos/find.args';
import { PrismaService } from '../../common/prisma/prisma.service';

describe('BulletinNotesService', () => {
  let service: BulletinNotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BulletinNotesService, PrismaService],
    }).compile();

    service = module.get<BulletinNotesService>(BulletinNotesService);
  });

  describe('findOne', () => {
    it('should return the bulletin notes with correct calculations', async () => {
      // Mock the necessary dependencies and data
      const prismaMock = {
        etudiant: {
          findUnique: jest.fn().mockResolvedValue({ id: 1, name: 'John Doe' }),
        },
        uniteEnseignement: {
          findMany: jest.fn().mockResolvedValue([
            { id: 1, name: 'UE1' },
            { id: 2, name: 'UE2' },
          ]),
        },
        matiere: {
          findMany: jest.fn().mockResolvedValue([
            { id: 1, name: 'Matiere1', credit: 3, coefficient: 2 },
            { id: 2, name: 'Matiere2', credit: 4, coefficient: 3 },
          ]),
        },
        cours: {
          findMany: jest.fn().mockResolvedValue([
            { id: 1, name: 'Cours1' },
            { id: 2, name: 'Cours2' },
          ]),
        },
        evaluationEtudiants: {
          findMany: jest.fn().mockResolvedValue([
            { id: 1, name: 'Evaluation1' },
            { id: 2, name: 'Evaluation2' },
          ]),
        },
        noteEtudiant: {
          findMany: jest.fn().mockResolvedValue([
            { id: 1, note: 12 },
            { id: 2, note: 15 },
          ]),
        },
      };

      // Call the findOne method
      const args: FindUniqueBulletinNotesArgs = {
        where: {
          etudiantId: 1,
          semestreId: 1,
          classeId: 1, // Add the missing classeId property
        },
      };

      const result = await service.findOne(args);

      // Assert the expected result
      expect(result).toEqual({
        etudiant: { id: 1, name: 'John Doe' },
        donnees: [
          {
            uniteEnseignement: { id: 1, name: 'UE1' },
            notes: [
              {
                matiere: { id: 1, name: 'Matiere1', credit: 3, coefficient: 2 },
                note: [{ id: 1, note: 12 }, { id: 2, note: 15 }],
                moyenne: '13.50',
                moyenneCoeff: '54',
                resultat: true,
              },
            ],
            moyenneUE: '13.50',
            creditObtenu: 3,
            decision: 'Validé',
          },
          {
            uniteEnseignement: { id: 2, name: 'UE2' },
            notes: [
              {
                matiere: { id: 2, name: 'Matiere2', credit: 4, coefficient: 3 },
                note: [{ id: 1, note: 12 }, { id: 2, note: 15 }],
                moyenne: '13.50',
                moyenneCoeff: '40.5',
                resultat: true,
              },
            ],
            moyenneUE: '13.50',
            creditObtenu: 4,
            decision: 'Validé',
          },
        ],
        moyenneGenerale: {
          moyenneSemestre: '13.50',
          totalCredit: 7,
          totalCoef: 5,
          nbCreditsObtenus: 7,
          moyenneTotalCoef: '47.25',
        },
      });

      // Verify the interactions with the dependencies
      expect(prismaMock.etudiant.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(prismaMock.uniteEnseignement.findMany).toHaveBeenCalledWith({
        where: { semestreId: 1 },
      });
      expect(prismaMock.matiere.findMany).toHaveBeenCalledWith({
        where: { uniteEnseignementId: 1 },
        include: { cours: true },
      });
      expect(prismaMock.cours.findMany).toHaveBeenCalledWith({
        where: { matiereId: 1 },
      });
      expect(prismaMock.evaluationEtudiants.findMany).toHaveBeenCalledWith({
        where: { coursId: 1 },
        include: { NoteEtudiant: true },
      });
      expect(prismaMock.noteEtudiant.findMany).toHaveBeenCalledWith({
        where: { evaluationEtudiantId: 1 },
      });
    });
  });
});