export class ToBackWorker {
  static async sendOnlyFetch(path: string, method: string) {
    try {
      await fetch(path, {
        method
      })
    } catch(err) {
      
    }
  }
}