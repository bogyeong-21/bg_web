function change_mode(self) {
    var main = document.querySelector('main');
    var nav = document.querySelector('nav');
    var selected_li = document.querySelector('#selected');
    if(self.value == "light mode") {
        main.style.backgroundColor="black";
        main.style.color="white";
        nav.style.backgroundColor="black";
        selected_li.style.backgroundColor="black";
        selected_li.querySelector('a').style.color="white";

        self.value = "dark mode";
        self.style.backgroundColor = " palegoldenrod";
    }
    else {
        main.style.backgroundColor="white";
        main.style.color="black";
        nav.style.backgroundColor="white";
        selected_li.style.backgroundColor="white";
        selected_li.querySelector('a').style.color="black";


        self.value = "light mode";
        self.style.backgroundColor = "powderblue";
    }
}