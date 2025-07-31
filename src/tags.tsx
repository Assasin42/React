import React from 'react';
import { Flex, Tag } from 'antd';

const tagsData = ['Ziraat', 'Ziraat Teknoloji', 'Finans', 'Yazılım'];

const MyTag: React.FC = () => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>(['Movies']);
  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <Flex gap={4} wrap align="center">
      <span style={{ color: '#c92121ff' }}>Etiket Seçiniz:</span>
      {tagsData.map<React.ReactNode>((tag) => (
        <Tag.CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </Tag.CheckableTag>
      ))}
    </Flex>
  );
};

export default MyTag;