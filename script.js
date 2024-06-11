let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
};

document.querySelectorAll('a').forEach(link => {
    link.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    };
    link.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    };
});

function sendMessage() {
    var phoneNumber = '7879171761';
    var message = 'Hello! This is a test message.';
    
    var smsUrl = 'sms:' + phoneNumber + '?body=' + encodeURIComponent(message);
    
    window.location.href = smsUrl;
}

function handleSendMessage() {
    sendMessage();
    alert('Message Sent');
}

$(document).ready(function() {
    $('.btn').click(function() {
        $('#form').attr('action',
                       'mailto:rishikarathore1208@gmail.com?subject=' +
                       $('.box').val() + '&body=' + $('.box').val());
        $('#form').submit();
    });
});
