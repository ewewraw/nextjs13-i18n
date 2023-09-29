import useTranslation from 'next-translate/useTranslation'

export default function Page() {
  const { t } = useTranslation('common')

  return <h1>{t('message_1')}</h1>
}
