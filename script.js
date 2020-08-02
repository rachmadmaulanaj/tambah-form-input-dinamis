// Inisialisasi variabel
let i = 0;
const barisInputBaru = document.getElementById('barisInputBaru');
const tambahBarisInputBaru = document.getElementById('tambahBarisInputBaru');

// Event jika tombol tambah diklik
tambahBarisInputBaru.addEventListener('click', function(e) {
    e.preventDefault();
    barisInputBaru.innerHTML += `<div class="form-group row">
                                    <label for="inputBaru${i}" class="col-2 col-form-label"></label>
                                    <div class="col-8">
                                        <input type="text" name="inputBaru[]" id="inputBaru${i}" class="form-control">
                                        <p class="form-text mb-0 text-left" id="pesanErorInputBaru${i}"></p>
                                    </div>
                                    <div class="col-2">
                                        <button class="btn btn-danger" type="button" id="hapusBarisInput"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>`
    i++;
});

// Event jika tombol hapus diklik
function hapusElement() {
    const elBarisInputBaru = this.parentNode.parentNode;
    elBarisInputBaru.parentNode.removeChild(elBarisInputBaru);
}
barisInputBaru.addEventListener('click', function(e) {
    let t = e.target;
    while (t && t !== this) {
        if (t.matches('#hapusBarisInput')) {
            hapusElement.call(t, e);
        }
        t = t.parentNode;
    }
});