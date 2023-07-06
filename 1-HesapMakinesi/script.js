
var _buttonlar = document.getElementsByTagName("button");
var _C = document.getElementById("C");



var _uzunluk = _buttonlar.length;
let i = 0;
var _sonuuc = document.getElementById("sonuc");

for (i = 0; i < _uzunluk; i++) {

    _buttonlar[i].onclick = Hesapla;

}
function Hesapla() {
    var _deger = this.innerHTML;
    if (_deger === "=") {
        try {
            _sonuuc.value = eval(_sonuuc.value);
        } catch (e) {
            _sonuuc.value = "0";
        }
        return;
    }
    _sonuuc.value += _deger;
}
_C.onclick = Temizle;
function Temizle() {
    const _input = document.getElementById("sonuc");
    _input.value="";
}