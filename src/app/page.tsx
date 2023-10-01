'use client';
import useTranslation from 'next-translate/useTranslation'
import React from "react";

export default function Page() {
  const { t } = useTranslation('common')

  return <>
  <h1>{t('message_1')}</h1>
  </>
}
