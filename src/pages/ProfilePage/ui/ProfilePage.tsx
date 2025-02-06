import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page/Page";
import { VStack } from "@/shared/ui/Stack";
import { EditableProfileCard } from "@/features/editableProfileCard";
import { useParams } from "react-router-dom";
import { ProfileRating } from "@/features/profileRating";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";

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
