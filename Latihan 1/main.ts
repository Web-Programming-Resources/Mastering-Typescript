interface Teman {
  nama: string;
}

function tulisNama(Paramteman: Teman[]) {
  for (let tem of Paramteman) {
    console.log(tem.nama);
  }
}
tulisNama([
  {nama: "Maudy Ayunda"},
  {nama: "Gun Gun Febrianza"},
  {nama: "Martino Hart"}]);
