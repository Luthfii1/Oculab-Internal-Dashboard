// dummy data getFasyankesList generate 20 data
export async function getFasyankesListDummy() {
    return Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    no: i + 1,
    fasyankes: 'Klinik Sehat Sentosa',
    pj: 'dr. Rina Kusuma, M.Kes',
    email: 'rinakusuma@kliniksentosa.id',
    jenis: 'Klinik Pratama',
    provinsi: 'Kalimantan Selatan',
    created: '27/12/2001',
    updated: 'dd/mm/yyyy',
  }));
}

export async function getFasyankesDetailDummy(id: string) {
    return {
        id: id,
        nama: 'Klinik Sehat Sentosa',
        kode: '1234567890',
        jenis: 'Kategori A',
        izin: '1234567890',
        alamat: 'Jl. Raya No. 123, Jakarta',
        penanggungJawab: 'dr. Rina Kusuma, M.Kes',
        email: 'rinakusuma@kliniksentosa.id',
        created: '27/12/2001',
        updated: 'dd/mm/yyyy',
    }
}