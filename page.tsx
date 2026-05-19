// apps/web/app/page.tsx
"use client";
import React, { useState } from 'react';

const LIST_MAPEL_DATABASE = [
  { id: 'M1001', nama: 'BAHASA INDONESIA', kelasId: 'K1001', jenjang: 'SD/MI' },
  { id: 'M1002', nama: 'MATEMATIKA', kelasId: 'K1001', jenjang: 'SD/MI' },
  { id: 'M1003', nama: 'PENDIDIKAN PANCASILA', kelasId: 'K1001', jenjang: 'SD/MI' },
  { id: 'M1005', nama: 'ALQURAN HADIS', kelasId: 'K1001', jenjang: 'SD/MI' },
  { id: 'M1006', nama: 'AKIDAH AKHLAK', kelasId: 'K1001', jenjang: 'SD/MI' },
  { id: 'M1007', nama: 'FIQIH', kelasId: 'K1001', jenjang: 'SD/MI' },
  { id: 'M1008', nama: 'SEJARAH KEBUDAYAAN ISLAM (SKI)', kelasId: 'K1001', jenjang: 'SD/MI' },
  { id: 'M1077', nama: 'BAHASA INDONESIA', kelasId: 'K1007', jenjang: 'SMP/MTs' },
  { id: 'M1078', nama: 'MATEMATIKA', kelasId: 'K1007', jenjang: 'SMP/MTs' },
  { id: 'M1079', nama: 'ILMU PENGETAHUAN ALAM (IPA)', kelasId: 'K1007', jenjang: 'SMP/MTs' },
  { id: 'M1084', nama: 'ALQURAN HADIS', kelasId: 'K1007', jenjang: 'SMP/MTs' },
  { id: 'M1086', nama: 'FIQIH', kelasId: 'K1007', jenjang: 'SMP/MTs' },
  { id: 'M1113', nama: 'BAHASA INDONESIA', kelasId: 'K1010', jenjang: 'SMA/MA/SMK' },
  { id: 'M1115', nama: 'MATEMATIKA', kelasId: 'K1010', jenjang: 'SMA/MA/SMK' },
  { id: 'M1117', nama: 'FISIKA', kelasId: 'K1010', jenjang: 'SMA/MA/SMK' },
  { id: 'M1118', nama: 'KIMIA', kelasId: 'K1010', jenjang: 'SMA/MA/SMK' },
  { id: 'M1125', nama: 'ALQURAN HADIS', kelasId: 'K1010', jenjang: 'SMA/MA/SMK' }
];

export default function EduaksiDashboardHP() {
  const [selectedKelasId, setSelectedKelasId] = useState('K1001');
  const [activeTab, setActiveTab] = useState('dashboard');

  const filteredMapel = LIST_MAPEL_DATABASE.filter(item => item.kelasId === selectedKelasId);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased">
      <nav className="sticky top-0 z-50 bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-white">E</div>
          <div>
            <h1 className="text-sm font-black text-white tracking-wide">EDUAKSI v4.0</h1>
            <p className="text-[9px] text-emerald-400 font-mono">● Database PostgreSQL Active</p>
          </div>
        </div>
        <span className="text-[10px] bg-slate-800 px-2 py-1 rounded-full border border-slate-700 font-bold text-slate-300">GURU VIP</span>
      </nav>

      <main className="flex-1 p-4 max-w-md mx-auto w-full pb-24">
        {activeTab === 'dashboard' && (
          <div className="space-y-5">
            <div className="bg-gradient-to-r from-indigo-950 to-slate-900 p-4 rounded-xl border border-indigo-500/20 shadow-md">
              <h2 className="text-sm font-bold text-white">Panel Integrasi Database</h2>
              <p className="text-[11px] text-slate-400 mt-0.5">Sinkronisasi data semester ganjil & genap terpusat real-time.</p>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 font-mono block mb-2 uppercase tracking-wider">Pilih Kode Kelas (UID Database)</label>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {[
                  { id: 'K1001', label: 'Kelas 1 SD/MI' },
                  { id: 'K1007', label: 'Kelas 7 SMP/MTs' },
                  { id: 'K1010', label: 'Kelas 10 SMA/MA' }
                ].map(k => (
                  <button
                    key={k.id}
                    onClick={() => setSelectedKelasId(k.id)}
                    className={`px-3 py-2 rounded-lg border font-semibold text-xs whitespace-nowrap flex flex-col items-start transition-all ${
                      selectedKelasId === k.id ? 'bg-indigo-600 text-white border-indigo-400 shadow-md' : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    <span>{k.label}</span>
                    <span className="text-[8px] font-mono opacity-60">ID: {k.id}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-slate-400 font-mono uppercase">Mata Pelajaran Ter-load</span><span className="text-[10px] text-indigo-400 font-mono font-bold">{filtered
