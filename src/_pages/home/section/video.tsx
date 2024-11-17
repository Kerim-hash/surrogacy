import VideoButton from '@/features/VideoBlock/ui';
import { useDictionary } from '@/shared/lib/hooks';
import YouTubeModal from '@/widgets/YoutubeModal/YouTubeModal';
import { FC, useState } from 'react';
import VideoPreview1 from '@/assets/video-preview-1.png';
import VideoPreview2 from '@/assets/video-preview-2.png';

import Image from 'next/image';
import { DictionaryType } from '@/shared/config/i18n';

const Video: FC<{dictionary: DictionaryType }> = ({dictionary}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);

  const handleLikeClick = (id: string) => {
    setVideoId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoId(null); 
  };

  return (
    <div className="container py-[100px]">
      <div className="flex gap-16">
        <div className="flex-1">
          <h3 className='mb-10 font-oxygen text-6xl text-textPrimary leading-70p4 font-normal'>{dictionary.family.video.firstBlock}</h3>
          <div className="relative">
            <Image src={VideoPreview1} alt="preview" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <VideoButton onLike={() => handleLikeClick('OM4s4HSmYAc')} /> {/* Replace with video ID for this button */}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="mb-10 font-oxygen text-6xl text-textPrimary leading-70p4 font-normal">{dictionary.family.video.secondBlock}</h3>
          <div className="relative">
            <Image src={VideoPreview2} alt="preview" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <VideoButton onLike={() => handleLikeClick('HFlgEttftn8')} /> {/* Replace with video ID for this button */}
            </div>
          </div>
        </div>
      </div>
      <YouTubeModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoId={videoId} 
      />
    </div>
  );
};

export default Video;
