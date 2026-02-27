import type { KeyboardEvent, MouseEvent, ReactNode } from 'react';

export type AppConfigKey = 'messenger' | 'work' | 'contact' | 'shutdown' | 'settings';
export type AppWindowId = 'chat' | 'work' | 'contact' | 'shutdown' | 'settings';
export type SystemTheme = 'Light' | 'Dark';
export type InputMode = 'free' | 'options';

export interface IconDefinition {
  url: string;
  alt: string;
}

export type IconsByWindowId = Record<AppWindowId, IconDefinition>;
export type AppsByConfigKey = Record<AppConfigKey, string>;

export interface ContactConfig {
  content: string;
  emailLink: string;
  linkedin: string;
  github: string;
}

export interface WorkItem {
  title: string;
  copy: string;
  url?: string;
}

export interface SystemBackground {
  name: string;
  url: string;
}

export interface ActiveSystemSettings {
  background: SystemBackground;
  theme: SystemTheme;
}

export interface SystemSettingsConfig {
  background: SystemBackground[];
  theme: SystemTheme[];
}

export interface ChatHistoryItem {
  user: string;
  id: string;
  message: string;
  bot?: boolean;
}

export interface CuratedOptions {
  visible: boolean;
  links: string[];
}

export interface ChatApiData {
  response: string[];
  followUp?: string[];
}

export type UIEventLike = MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement> | null;

export type UpdateActiveApp = (event: UIEventLike, component: string) => void;
export type CloseApp = (event: UIEventLike, component: string) => void;
export type UpdateStartbar = (component: string, minimizeWindow?: boolean) => void;

export interface WindowControlProps {
  updateActiveApp: UpdateActiveApp;
  closeApp: CloseApp;
  updateStartbar: UpdateStartbar;
  openApps: string[];
  minimizedApps: string[];
  currentlyActiveApp: string;
  previouslyActiveApp: string;
}

export interface ProgramProps extends WindowControlProps {
  programName: string;
  programIcon: string;
  children: ReactNode;
  programRights?: string | null;
  contentEditable?: boolean;
  notificationStyle?: boolean;
  systemStyle?: boolean;
}

export interface SettingsProps extends WindowControlProps {
  activeSystemSettings: ActiveSystemSettings;
  changeSystemSettings: (background?: SystemBackground | null, theme?: SystemTheme | null) => void;
}
