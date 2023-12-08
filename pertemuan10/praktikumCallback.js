/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  }
  
  /**
   * Fungsi untuk download file
   * @param {function} callback - Function callback show
   * Buat promise baru didalam fungsi download yang menerima parameter resolve
   */
  const download = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = "windows-10.exe";
            resolve(result);
          }, 3000);
    })
  }
  
  download(showDownload);
  
  /**
   * TODO:
   * - Refactor callback ke Promise atau Async Await
   * - Refactor function ke ES6 Arrow Function
   * - Refactor string ke ES6 Template Literals
   */

const main = async () => {
    try {
        showDownload(await download());
    } catch (error) {
        console.error("Error during download:", error);
    }
};

main();