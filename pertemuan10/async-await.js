const persiapan = () => {
    setTimeout(function () {
        console.log("Mempersiapkan Bahan ...");
    }, 3000);
};

const rebusAir = () => {
    setTimeout(function () {
        console.log("Merebus Air ...");
    }, 7000);
};

const masak = () => {
    setTimeout(function () {
        console.log("Memasak mie ...");
        console.log("Selesai");
    }, 5000);
};

/**
 * async digunakan untuk memberitahu ada proses asynchronous.
 * await digunakan untuk menunggu promise selesai.
 * await hanya bisa digunakan di dalam function.
 */
const main = async () => {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
};

main();