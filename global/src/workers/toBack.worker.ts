import * as dotenv from 'dotenv';
dotenv.config();

const apiUrl = `${process.env.API_LOCAL || 'http://localhost:'}${process.env.PORT_BACK || '3000'}`;

interface Params {
  [key: string]: any;
}

export class ToBackWorker {
  private static async handleError(err: any, path: string, method: string) {
    const errorReport = {
      message: err instanceof Error ? err.message : String(err),
      path,
      method
    };

    try {
      await fetch(`${apiUrl}/dev/error`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorReport),
      });
    } catch (innerErr) {
      console.error('Erro ao enviar para /dev/error:', innerErr);
    }
  }

  static async sendOnlyF(path: string, method: string) {
    try {
      await fetch(path, { method });
    } catch (err) {
      await this.handleError(err, path, method);
    }
  }

  static async sendOneP(path: string, method: string, param1: any) {
    try {
      await fetch(path, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ param1 }),
      });
    } catch (err) {
      await this.handleError(err, path, method);
    }
  }

  static async sendTwoP(path: string, method: string, param1: any, param2: any) {
    try {
      await fetch(path, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ param1, param2 }),
      });
    } catch (err) {
      await this.handleError(err, path, method);
    }
  }

  static async sendMultP(params: Params, path: string, method: string, count: number) {
    try {
      const payload = { ...params, count };

      await fetch(path, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      await this.handleError(err, path, method);
    }
  }

  static async sendHdOneP(path: string, method: string, headers: any, param1: any) {
    try {
      await fetch(path, {
        method,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ param1 }),
      });
    } catch (err) {
      await this.handleError(err, path, method);
    }
  }

  static async sendHdTwoP(path: string, method: string, headers: any, param1: any, param2: any) {
    try {
      await fetch(path, {
        method,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ param1, param2 }),
      });
    } catch (err) {
      await this.handleError(err, path, method);
    }
  }

  static async sendHdMultP(params: Params, path: string, method: string, headers: any, count: number) {
    try {
      const payload = { ...params, count };

      await fetch(path, {
        method,
        headers: {
          ...headers,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      await this.handleError(err, path, method);
    }
  }
}
