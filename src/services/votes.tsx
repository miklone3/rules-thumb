import { saveDatabase, getDatabase } from "./core";

export const saveVotes = (id, data) => {
  const obj: any = getDatabase();
  obj.pastTrials = obj.pastTrials.map(item => {
    if (id === item.id) {
      return data;
    }
    return item;
  })

  saveDatabase(obj);
}
