function calculateHPP() {
    // Ambil nilai dari form
    const rawMaterialsCost = parseFloat(document.getElementById('rawMaterialsCost').value);
    const laborCost = parseFloat(document.getElementById('laborCost').value);
    const electricityUsage = parseFloat(document.getElementById('electricityUsage').value);
    const electricityRate = parseFloat(document.getElementById('electricityRate').value);
    const gasUsage = parseFloat(document.getElementById('gasUsage').value);
    const gasRate = parseFloat(document.getElementById('gasRate').value);

    // Hitung biaya listrik dan gas
    const electricityCost = electricityUsage * electricityRate;
    const gasCost = gasUsage * gasRate;

    // Hitung total HPP
    const hpp = rawMaterialsCost + laborCost + electricityCost + gasCost;

    // Hitung pajak dan biaya layanan
    const tax = hpp * 0.10;
    const serviceCharge = hpp * 0.05;

    // Hitung total biaya
    const totalCost = hpp + tax + serviceCharge;

    // Tampilkan hasil
    document.getElementById('hppResult').innerText = `HPP: Rp ${hpp.toFixed(2)}`;
    document.getElementById('totalCostResult').innerText = `Total Biaya (dengan Pajak dan Biaya Layanan): Rp ${totalCost.toFixed(2)}`;
}
