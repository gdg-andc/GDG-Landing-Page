export type EventCategory = 'Workshop' | 'Bootcamp' | 'Seminar' | 'Orientation';

export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  signUpLink?: string;
  category: EventCategory;
  attendees: string | number;
  attendeesCount?: number | null;
}