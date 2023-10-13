import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import EntityForm from '@/components/organisms/entity-form';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import Input from '@/components/atoms/input';
import { Account } from '@/types/entity/account';
import { SettingsPageProps } from '../../types';

const PersonalInfoForm = ({ onUpdateAccount, account }: SettingsPageProps) => {
  const { translate } = useTranslation();

  const router = useRouter();

  const [data, setData] = useState<Partial<Account>>(account);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({ ...data, [e.target.name]: e.target.value });
    },
    [data],
  );

  const handleSubmit = useCallback(async () => {
    await onUpdateAccount?.(data);

    router.push('?hash=settings');
  }, [onUpdateAccount, data, router]);

  return (
    <EntityForm
      translations={{ cancel: translate('common.cancel'), submit: translate('common.save') }}
      onSubmit={handleSubmit}
      onCancel={() => router.push('?hash=settings')}
    >
      <div className="flex flex-col gap-4">
        <Input
          name="email"
          label={translate('common.email')}
          required
          type="email"
          value={data.email}
          onChange={handleChange}
          containerClassName="w-full min-w-[unset] md:w-[350px] lg:w-[400px]"
        />

        <Input
          name="firstName"
          label={translate('common.firstName')}
          required
          value={data.firstName}
          onChange={handleChange}
          containerClassName="w-full min-w-[unset] md:w-[350px] lg:w-[400px]"
        />

        <Input
          name="lastName"
          label={translate('common.lastName')}
          required
          value={data.lastName}
          onChange={handleChange}
          containerClassName="w-full min-w-[unset] md:w-[350px] lg:w-[400px]"
        />
      </div>
    </EntityForm>
  );
};

export default PersonalInfoForm;
