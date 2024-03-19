import {
  ArrowRightIcon,
  ExitIcon,
  FlashIcon,
  InfoIcon,
  PianoMenu,
  PlusIcon,
  RecentIcon,
  SaveIcon,
  SettingsIcon,
} from '@workchopin/workchopin-core';
import { useTranslation } from '../i18n';
import { I18nParams } from '../../@types/i18n';

export default async function Index({ params: { lng } }: I18nParams) {
  const { t } = await useTranslation(lng);

  return (
    <div className="h-screen flex justify-center flex-col gap-2 text-center">
      <h1 className="text-4xl font-bold">🎼 {t('title')}</h1>
      <h2 className="text-xl">{t('subtitle')}</h2>
      <PianoMenu
        items={[
          {
            icon: <PlusIcon />,
            title: 'Create new session',
            subItem: { icon: <FlashIcon />, title: 'Quick session' },
          },
          { icon: <ArrowRightIcon />, title: 'Join existing session' },
          {
            icon: <SaveIcon />,
            title: 'Saved session',
            subItem: { icon: <RecentIcon />, title: 'Last session' },
          },
          {
            icon: <SettingsIcon />,
            title: 'Preferences',
            subItem: { icon: <InfoIcon />, title: 'About' },
          },
          {
            icon: <ExitIcon />,
            title: 'Exit',
          },
        ]}
      />
    </div>
  );
}
