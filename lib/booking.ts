import { differenceInCalendarDays, format } from "date-fns";
import { es } from "date-fns/locale";
import type { DateRange } from "@daypicker/react";

/** Número de noches entre la llegada y la salida (0 si falta alguna fecha). */
export const countNights = (range: DateRange | undefined): number => {
  if (!range?.from || !range.to) return 0;
  return Math.max(differenceInCalendarDays(range.to, range.from), 0);
};

/** Fecha corta en español, p. ej. "7 dic 2026". */
export const formatShortDate = (date: Date | undefined): string =>
  date ? format(date, "d MMM yyyy", { locale: es }) : "Añade fecha";

/** Importe en euros sin decimales, p. ej. "1.200 €". */
export const formatEuros = (amount: number): string =>
  `${amount.toLocaleString("es-ES")} €`;
