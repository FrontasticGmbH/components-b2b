import useTranslation from '@/providers/I18n/hooks/useTranslation';
import { UseAuthProps } from '../types';
import { AuthLayoutProps, AuthTemplatesProps } from '../../types';

const useAuthProps: UseAuthProps = ({
  resetting,
  image,
  logo,
  logoLink,
  handleLoginSubmit,
  handleResetSubmit,
  goBackToLogin,
}) => {
  const { translate } = useTranslation();

  const commonProps: AuthLayoutProps = {
    image,
    logo,
    logoLink,
  };

  const authLayoutProps: { [key in 'reset' | 'login']: AuthTemplatesProps } = {
    login: {
      onSubmit: handleLoginSubmit,
      title: translate('account.account.login.yours'),
      subtitle: translate('account.account.doNotHave'),
      subtitleLink: '/register',
      subtitleLinkLabel: translate('account.account.register.link'),
      buttonLabel: translate('account.account.login'),
      ...commonProps,
    },
    reset: {
      onSubmit: handleResetSubmit,
      title: translate('account.password.reset.headline'),
      buttonLabel: translate('account.account.reset.link'),
      footerLinkLabel: translate('account.account.back.login'),
      footerLink: '/login',
      footerOnClick: goBackToLogin,
      ...commonProps,
    },
  };

  return authLayoutProps[resetting ? 'reset' : 'login'];
};

export default useAuthProps;
