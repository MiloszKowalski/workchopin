import {
  ArrowRightIcon,
  ExitIcon,
  FlashIcon,
  InfoIcon,
  LanguageSelect,
  PianoMenu,
  PlusIcon,
  RecentIcon,
  SaveIcon,
  SettingsIcon,
} from '@workchopin/workchopin-core';
import { useTranslation, I18nParams } from '@workchopin/workchopin-i18n';

export default async function Index({ params: { lng } }: I18nParams) {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex h-screen flex-col items-center p-4">
      <LanguageSelect />
      <div className="my-auto flex flex-col justify-center gap-2 text-center ">
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
    </div>
  );
}
