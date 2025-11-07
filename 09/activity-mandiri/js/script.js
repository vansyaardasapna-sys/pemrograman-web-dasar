function fn_ValForm() {
    var sMsg = "";

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Cek field kosong
    if (name === "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (email === "") {
        sMsg += "\n* Anda belum mengisikan email";
    }
    if (message === "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    // Validasi email hanya jika field tidak kosong
    if (email !== "") {
        var emailPattern = /^[a-z0-9][a-z0-9._-]{0,}[a-z0-9]@[a-z0-9.-]+\.[a-z0-9]{2,4}$/i;
        if (!emailPattern.test(email)) {
            sMsg += "\n* Format email tidak valid (contoh: nama@email.com)";
        }
    }

    if (sMsg !== "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        alert("Form berhasil divalidasi dan siap dikirim!");
        return true;
    }
}
