export default function(link, option) {
  window.count = 0;
  let id = window.count++;
  let url = link;
  if (option) {
    url = url + '?';
    for (index in option) {
      url = url + index + '=' + option[index] + '&';
    }
    url = url + 'callback=' + '_jp' + id;
  } else {
    url = url + '?scallback=' + '_jp' + id;
  }
  let script = document.createElement('script');
  script.id = '_jp' + id;
  script.src = url;
  document.body.appendChild(script);
  return new Promise((resolve, reject) => {
    window['_jp' + id] = res => {
      document
        .getElementById('_jp' + id)
        .parentNode.removeChild(document.getElementById('_jp' + id));
      window['_jp' + id] = null;
      if (res) {
        resolve(res);
      }
    };
    setTimeout(() => {
      reject(new Error('timeout'));
    }, 3000);
  });
}
