export default class BaseService {
  post({ url, data }: { url: string; data: any }) {
    $fetch(`/api/${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "applicaiotn/json",
      },
      body: JSON.stringify(data),
    });
  }
}
