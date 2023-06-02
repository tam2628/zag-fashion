type ProfilePictureProps = {
  url: string;
};

export default function ProfilePicture({ url }: ProfilePictureProps) {
  return (
    <div className="w-fit bg-slate-200 rounded-full">
      <img src={url} className="w-14 h-14" />
    </div>
  );
}
