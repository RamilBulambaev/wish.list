import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserAuthData } from "@/entities/User";
import { EditableProfileCard } from "@/features/editableProfileCard";
import { ProfileRating } from "@/features/profileRating";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { Page } from "@/widgets/Page";




interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const authData = useSelector(getUserAuthData);
  const isRate = authData?.id !== id; //

  return (
    <Page className={classNames("", {}, [className])}>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        {isRate && <ProfileRating />}
      </VStack>
    </Page>
  );
};

export default ProfilePage;
