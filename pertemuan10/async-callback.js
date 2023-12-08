const persiapan = () => {
    console.log("Mempersiapkan Bahan ...");
};

const rebusAir = () => {
    console.log("Merebus Air ...");
};

const masak = () => {
    console.log("Memasak mie ...");
    console.log("Selesai");
};

const main = () => {
    setTimeout(() => {
        persiapan();

        setTimeout(() => {
            rebusAir();

            setTimeout(() => {
                masak();
            }, 5000);
        }, 7000);
    }, 3000);
}

main();