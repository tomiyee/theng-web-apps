
export type LineItem = {
  /** An arbitrary unique ID for this individual */
  id: string;
  itemName: string;
  cost: number;
};

export type IndividualContribution = {
  name: string;
  /** An aribtrary unique ID for this indivudual */
  id: string;
  itemizedContributions: LineItem[];
};

export const newLineItem = (n: number): LineItem => {
  return {
    id: crypto.randomUUID(),
    itemName: `Item #${n}`,
    cost: 0,
  };
};

export const newIndividualContributor = (n: number): IndividualContribution => {
  return {
    id: crypto.randomUUID(),
    name: `Person #${n}`,
    itemizedContributions: [newLineItem(1)],
  };
};

export const INITIAL_BILL = [newIndividualContributor(1)];
