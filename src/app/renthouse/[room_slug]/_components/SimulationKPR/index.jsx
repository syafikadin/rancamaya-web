"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import Heading from "@/app/_ui/Heading";

export default function Home() {
  const [hargaRumah, setHargaRumah] = useState("");
  const [dp, setDp] = useState("");
  const [plafonKredit, setPlafonKredit] = useState("");
  const [tenor, setTenor] = useState("3");
  const [bunga, setBunga] = useState("");
  const [cicilan, setCicilan] = useState("");

  const formatCurrency = (value) => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleHargaRumahChange = (e) => {
    const formattedValue = formatCurrency(e.target.value);
    setHargaRumah(formattedValue);
    calculatePlafon(formattedValue, dp);
  };

  const handleDpChange = (e) => {
    const formattedValue = formatCurrency(e.target.value);
    setDp(formattedValue);
    calculatePlafon(hargaRumah, formattedValue);
  };

  const calculatePlafon = (hargaRumah, dp) => {
    const harga = parseInt(hargaRumah.replace(/\D/g, "")) || 0;
    const downPayment = parseInt(dp.replace(/\D/g, "")) || 0;
    const plafon = harga - downPayment;
    setPlafonKredit(plafon.toLocaleString("id-ID"));
  };

  const calculateCicilan = () => {
    const plafon = parseInt(plafonKredit.replace(/\D/g, "")) || 0;
    const bungaPerTahun = parseFloat(bunga) || 0;
    const tenorTahun = parseInt(tenor) || 0;

    if (plafon && tenorTahun && bungaPerTahun) {
      const bungaBulanan = bungaPerTahun / 100 / 12;
      const jumlahBulan = tenorTahun * 12;
      const cicilanBulanan =
        (plafon * bungaBulanan) / (1 - Math.pow(1 + bungaBulanan, -jumlahBulan));
      setCicilan(Math.round(cicilanBulanan).toLocaleString("id-ID"));
    } else {
      alert("Mohon lengkapi semua data");
    }
  };

  return (
    <div className={styles.container}>
      <Heading className={styles.heading}>Simulasi KPR</Heading>
      <hr className="decriptionDivider" />
      <div className={styles.formGroup}>
        <label htmlFor="harga-rumah">Harga Rumah</label>
        <div className={styles.currency}>
          <input
            type="text"
            id="harga-rumah"
            value={hargaRumah}
            onChange={handleHargaRumahChange}
            placeholder="Masukkan harga rumah"
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="dp">DP (Uang Muka)</label>
        <div className={styles.currency}>
          <input
            type="text"
            id="dp"
            value={dp}
            onChange={handleDpChange}
            placeholder="Masukkan DP"
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="plafon-kredit">Plafon Kredit</label>
        <div className={styles.currency}>
          <input type="text" id="plafon-kredit" value={plafonKredit} readOnly />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="tenor">Tenor Kredit</label>
        <select id="tenor" value={tenor} onChange={(e) => setTenor(e.target.value)}>
          <option value="3">3 Tahun</option>
          <option value="5">5 Tahun</option>
          <option value="10">10 Tahun</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="bunga">Suku Bunga per Tahun (%)</label>
        <input
          type="number"
          id="bunga"
          value={bunga}
          onChange={(e) => setBunga(e.target.value)}
          placeholder="Masukkan suku bunga"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="cicilan">Estimasi Cicilan per Bulan</label>
        <div className={styles.currency}>
          <input type="text" id="cicilan" value={cicilan} readOnly />
        </div>
      </div>
      <div className={styles.formGroup}>
        <button onClick={calculateCicilan}>Hitung Cicilan</button>
      </div>
    </div>
  );
}
