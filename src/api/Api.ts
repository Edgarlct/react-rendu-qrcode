
export class Api {
  private static base_url = import.meta.env.VITE_API_URL;
  public static async get<T>(url: string, needAuth = true): Promise<T> {
    const response = await fetch(this.checkIfValidUrl(url), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': needAuth ? `Bearer ${localStorage.getItem('@qr_code:token')}` : '',
      },
    });

    return this.handleResponse(response, url);
  }

  public static async post<T>(url: string, body: any, needAuth = true): Promise<T> {
    const response = await fetch(this.checkIfValidUrl(url), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': needAuth ? `Bearer ${localStorage.getItem('@qr_code:token')}` : '',
      },
      body: JSON.stringify(body),
    });
    return this.handleResponse(response, url);
  }

  public static getLink(url: string) {
    return this.checkIfValidUrl(url);
  }

  protected static checkIfValidUrl(url: string) {
    if (url.startsWith('/')) {
      return this.base_url + url.slice(1);
    } else {
      return this.base_url + url;
    }
  }

  protected static async handleResponse(response: Response, url:string) {
    if (response.status === 401 && !url.includes("login")) {
      localStorage.removeItem('@qr_code:token');
      window.location.href = '/';
    }
    return response.json();
  }
}

