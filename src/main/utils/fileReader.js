/**
 * Created by saeade on 03/07/2017.
 */
export default function(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result.split("\n").slice(1).split(","));
    };
    reader.readAsText(file);
  });
}
