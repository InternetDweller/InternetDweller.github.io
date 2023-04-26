window.onload = () => {
    //можно ввернуть это в html, но будет некрасиво
    Array.from(document.getElementsByClassName('subscribe')).forEach((el) => {
        el.style.background = "linear-gradient(rgba(10, 106, 44, 0.547), rgba(16, 181, 68, 0.415)), url('img/paper.jpg')";
    });

    Array.from(document.getElementsByClassName('feedback')).forEach((el) => {
        el.style.background = "linear-gradient(rgba(9, 98, 9, 0.756), rgba(0, 128, 0, 0.420)), url('img/arabic2.jpg')";
    });
};

function subscribe() {
    const email = document.getElementById('emailField').value;
    alert(`Вы будете получать новости сайта на ${email}.`);
};

function feedSend() {
    const name = document.getElementById('contactsName').value;
    const email = document.getElementById('contactsEmail').value;
    const text = document.getElementById('contactsText').value;

    if (name.toLowerCase() == 'секретная история чая') {
        secret = 'Общеизвестно, что чай является полезным и вкусным напитком.\nОн обладает массой лечебных свойств и применяется для профилактики и лечения многих заболеваний.\nЧайные листья содержат до 15% белка, до 0,5% жира, около 12% углеводов, большое количество минеральных веществ, витаминов, кислот, эфирных масел, дубильных веществ.\nВ состав чая входят: калий, магний, фосфор, кальций, натрий, железо, марганец, медь, хлор, сера, йод, фтор, кобальт, никель, бор, цинк, алюминий, хром, молибден, стронций, ванадий и др.';
        alert(secret);
        return;
    };

    alert(`Вы, ${name}, сказали:\n\n${text}\n\nВаш электронный адрес: ${email}`);
};