export default class BaseService {
  post<T>({ url, data }: { url: string; data: any }) {
    return $fetch<T>(`/api/${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "applicaiotn/json",
      },
      body: JSON.stringify(data),
    });
  }

  get<T>({ url }: { url: string }) {
    return $fetch<T>(`/api/${url}`);
  }
}
