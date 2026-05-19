// packages/database/prisma/seed.ts
import { PrismaClient, JenjangType, KurikulumType, SemesterType } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Menyuntikkan data MAPEL ke database PostgreSQL...');

  const dataMapel = [
    // Kelas 1 (K1001)
    { id: 'M1001', nama: 'BAHASA INDONESIA', jenjang: JenjangType.SD, kelas: 1, kelasId: 'K1001' },
    { id: 'M1002', nama: 'MATEMATIKA', jenjang: JenjangType.SD, kelas: 1, kelasId: 'K1001' },
    { id: 'M1003', nama: 'PENDIDIKAN PANCASILA', jenjang: JenjangType.SD, kelas: 1, kelasId: 'K1001' },
    { id: 'M1005', nama: 'ALQURAN HADIS', jenjang: JenjangType.MI, kelas: 1, kelasId: 'K1001' },
    { id: 'M1006', nama: 'AKIDAH AKHLAK', jenjang: JenjangType.MI, kelas: 1, kelasId: 'K1001' },
    { id: 'M1007', nama: 'FIQIH', jenjang: JenjangType.MI, kelas: 1, kelasId: 'K1001' },
    { id: 'M1008', nama: 'SEJARAH KEBUDAYAAN ISLAM (SKI)', jenjang: JenjangType.MI, kelas: 1, kelasId: 'K1001' },
    
    // Kelas 7 (K1007)
    { id: 'M1077', nama: 'BAHASA INDONESIA', jenjang: JenjangType.SMP, kelas: 7, kelasId: 'K1007' },
    { id: 'M1078', nama: 'MATEMATIKA', jenjang: JenjangType.SMP, kelas: 7, kelasId: 'K1007' },
    { id: 'M1079', nama: 'ILMU PENGETAHUAN ALAM (IPA)', jenjang: JenjangType.SMP, kelas: 7, kelasId: 'K1007' },
    { id: 'M1084', nama: 'ALQURAN HADIS', jenjang: JenjangType.MTS, kelas: 7, kelasId: 'K1007' },
    { id: 'M1086', nama: 'FIQIH', jenjang: JenjangType.MTS, kelas: 7, kelasId: 'K1007' },

    // Kelas 10 (K1010)
    { id: 'M1113', nama: 'BAHASA INDONESIA', jenjang: JenjangType.SMA, kelas: 10, kelasId: 'K1010' },
    { id: 'M1115', nama: 'MATEMATIKA', jenjang: JenjangType.SMA, kelas: 10, kelasId: 'K1010' },
    { id: 'M1117', nama: 'FISIKA', jenjang: JenjangType.SMA, kelas: 10, kelasId: 'K1010' },
    { id: 'M1118', nama: 'KIMIA', jenjang: JenjangType.SMA, kelas: 10, kelasId: 'K1010' },
    { id: 'M1125', nama: 'ALQURAN HADIS', jenjang: JenjangType.MA, kelas: 10, kelasId: 'K1010' }
  ];

  for (const mapel of dataMapel) {
    await prisma.mapel.upsert({
      where: { id: mapel.id },
      update: { nama: mapel.nama, kelasId: mapel.kelasId },
      create: {
        id: mapel.id,
        nama: mapel.nama,
        kurikulum: KurikulumType.MERDEKA,
        jenjang: mapel.jenjang,
        kelas: mapel.kelas,
        kelasId: mapel.kelasId
      },
    });
  }

  console.log('Semua data tabel mata pelajaran sukses disuntikkan!');
}

main().catch((e) => { console.error(e); process.exit(1); });
