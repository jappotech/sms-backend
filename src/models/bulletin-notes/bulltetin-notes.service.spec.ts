import { Test, TestingModule } from '@nestjs/testing';
import { BulletinNotesService } from './bulletin-notes.service';
import { FindUniqueBulletinNotesArgs } from './dtos/find.args';
import { PrismaService } from '../../common/prisma/prisma.service';

describe('BulletinNotesService', () => {
  let service: BulletinNotesService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const mockPrismaService = {
      etudiant: {
        findUnique: jest.fn().mockResolvedValue({ 
          id: 1, 
          name: 'John Doe',
          inscriptions: []
        }),
      },
      uniteEnseignement: {
        findMany: jest.fn().mockResolvedValue([
          { id: 1, name: 'UE1' },
          { id: 2, name: 'UE2' },
        ]),
      },
      matiere: {
        findMany: jest.fn().mockResolvedValue([
          { id: 1, name: 'Matiere1', credit: 3, coefficient: 2, cours: [] },
          { id: 2, name: 'Matiere2', credit: 4, coefficient: 3, cours: [] },
        ]),
      },
      evaluationEtudiants: {
        findMany: jest.fn().mockResolvedValue([]),
      },
      noteEtudiant: {
        findMany: jest.fn().mockResolvedValue([]),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BulletinNotesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<BulletinNotesService>(BulletinNotesService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('bulletinSemestre', () => {
    it('should return a bulletin notes structure', async () => {
      // Simple test to verify the service method exists and returns a result
      const args: FindUniqueBulletinNotesArgs = {
        where: {
          etudiantId: 1,
          semestreId: 1,
          classeId: 1,
        },
      };

      const result = await service.bulletinSemestre(args);

      // Basic assertions to verify the structure
      expect(result).toBeDefined();
      expect(result.etudiant).toBeDefined();
      expect(result.donnees).toBeDefined();
      expect(result.moyenneGenerale).toBeDefined();
      expect(Array.isArray(result.donnees)).toBe(true);
      expect(typeof result.moyenneGenerale.moyenneSemestre).toBe('string');
    });
  });
});