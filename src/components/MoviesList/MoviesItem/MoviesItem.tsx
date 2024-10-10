import { ChangeEventHandler, FC, MouseEventHandler } from 'react';
import { MovieMutation } from '../../../types';

interface MoviesItemProps {
  title: string;
  onUpdate: (_: MovieMutation) => void;
  onDelete: MouseEventHandler;
}

const MoviesItem: FC<MoviesItemProps> = ({ title, onUpdate, onDelete }) => {
  const update: ChangeEventHandler<HTMLInputElement> = (e) => {
    onUpdate({ title: e.target.value });
  };

  return (
    <li className='list-group-item '>
      <div className='input-group'>
        <input type='text' className='form-control' placeholder='Movie title' onChange={update} value={title} />
        <button type='button' className='btn btn-danger fa fa-trash' aria-label='Delete' onClick={onDelete} />
      </div>
    </li>
  );
};

export default MoviesItem;
