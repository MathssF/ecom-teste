import * as dotenv from 'dotenv';
dotenv.config();

const apiUrl = `${process.env.API_LOCAL || 'http://localhost:'}${process.env.PORT_BACK || '3000'}`;


export class ToBackWorker {
  static async sendOnlyFetch(path: string, method: string) {
    try {
      await fetch(path, {
        method
      })
    } catch(err) {
      const errorReport = {
        message: err instanceof Error ? err.message : String(err),
        path,
        method
      };

      await fetch(`${apiUrl}/dev/error`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });
    }
  }
}