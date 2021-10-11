export default class ApiService<T> {
  get(): Promise<T> {
    return fetch('http://localhost:9382/events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response: Response) => {
      return response.json();
    })
      .then((data): Promise<T> => data);
  }

  store(key: string, value: any): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  getFromLocalStorage(key: string): Promise<number[]> {
    return new Promise((resolve) => {
      resolve(JSON.parse(localStorage.getItem(key) || '[]'));
    });
  }

  removeFromLocalStorage(key: string): Promise<number[]> {
    return new Promise((resolve) => {
      resolve(JSON.parse(localStorage.getItem(key) || '[]'));
    });
  }
}


