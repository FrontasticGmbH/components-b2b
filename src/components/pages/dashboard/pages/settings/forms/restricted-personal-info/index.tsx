import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import EntityForm from '@/components/organisms/entity-form';
import useTranslation from '@/providers/I18n/hooks/useTranslation';
import { Account } from '@/types/entity/account';
import Select from '@/components/atoms/select';
import { SettingsPageProps } from '../../types';

const RestrictedPersonalInfoForm = ({
  onUpdateAccount,
  account,
  businessUnitOptions,
  roleOptions,
  isAdmin,
}: SettingsPageProps) => {
  const { translate } = useTranslation();

  const router = useRouter();

  const [data, setData] = useState<Partial<Account>>(account);

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
        <Select
          label={translate('common.company')}
          required={isAdmin}
          value={data.businessUnit}
          onChange={(businessUnit) => setData({ ...data, businessUnit })}
          className="w-full min-w-[unset] md:w-[350px] lg:w-[400px]"
          options={businessUnitOptions}
          disabled={!isAdmin}
        />

        <Select
          label={translate('common.role')}
          required={isAdmin}
          value={data.role}
          onChange={(role) => setData({ ...data, role })}
          className="w-full min-w-[unset] md:w-[350px] lg:w-[400px]"
          options={roleOptions}
          disabled={!isAdmin}
        />
      </div>
    </EntityForm>
  );
};

export default RestrictedPersonalInfoForm;
