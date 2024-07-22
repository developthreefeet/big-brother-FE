import { Label } from '@/shared/ui/ui/label';
import CommentList from './CommentList';
import { Textarea } from '@/shared/ui/ui/textarea';
import { Button } from '@/shared/ui/ui/button';

const CommentComponent = () => {
  return (
    <div className="flex flex-col space-y-14">
      <CommentList />
      <div className="flex flex-col space-y-2">
        <Label htmlFor="comment" className="font-bold text-md">
          댓글 남기기
        </Label>
        <Textarea placeholder="댓글을 입력해주세요." id="comment" />
        <Button>완료</Button>
      </div>
    </div>
  );
};

export default CommentComponent;
