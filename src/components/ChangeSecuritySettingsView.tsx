import { TypographyP } from './ui/typography';
import SecuritySettingsImage from '@/assets/securitySettings.png';

const ChangeSecuritySettingsView = () => {
  return (
    <div className='bg-card flex flex-col w-full max-w-[750px] rounded-sm shadow-sm p-8 gap-4 text-center'>
      <TypographyP className='!font-normal'>Please change your security settings</TypographyP>
      <div className='flex flex-col gap-5 text-left items-center'>
        <TypographyP className='!text-[16px]'>
          The RPC URL used to fetch leaderboard details is uses an HTTP connection and is blocked by
          your browser. Please change your security settings to allow this connection.
        </TypographyP>
        <TypographyP className='!text-[16px]'>
          If you are using Firefox or a Firefox-based browser, you do this by opening your browser's
          settings, navigating to the following section, and adding
          <b> https://buzzboard.netlify.app</b> and <b> http://143.215.130.235:8545</b> to the list
          of execptions.
        </TypographyP>
        <TypographyP className='!text-[16px]'>
          Alternatively, you can try using Chrome with default security settings and disabling any
          ad blockers.
        </TypographyP>
        <img
          src={SecuritySettingsImage}
          alt='Firefox settings'
          className='w-full object-contain rounded-sm'
        />
      </div>
      <div className='flex flex-row gap-4 justify-center items-center'></div>
    </div>
  );
};

export default ChangeSecuritySettingsView;
