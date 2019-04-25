export class AnswerStatistic {
  results: TypeTaskResult[];
  duration: string;
}

export class TypeTaskResult {
  typeTest: string;
  recommendation: string;
  countRight: number;
  allCount: number;
}
