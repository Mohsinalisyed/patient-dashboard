import { DiagnosisHistoryEntry } from '../types/patient';

export function filterDiagnosisHistory(
  history: DiagnosisHistoryEntry[],
  filter: '1m' | '3m' | '6m' | '1y'
): DiagnosisHistoryEntry[] {
  if (!history.length) return [];

  // Sort by year and month descending
  const sorted = [...history].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    const monthOrder = [
      'January','February','March','April','May','June','July','August','September','October','November','December'
    ];
    return monthOrder.indexOf(b.month) - monthOrder.indexOf(a.month);
  });

  switch (filter) {
    case '1m':
      return sorted.slice(0, 1);
    case '3m':
      return sorted.slice(0, 3);
    case '6m':
      return sorted.slice(0, 6);
    case '1y':
      return sorted.slice(0, 12);
    default:
      return sorted;
  }
} 