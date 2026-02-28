import FieldsetLegend from './FieldsetLegend';
import '../styles/Fieldset.css';
import { DISPLAY } from '../consts/input';

export default function Fieldset({ title, id, isActive, children }) {
  return (
    <>
      <fieldset
        id={id}
        style={{ display: isActive ? DISPLAY.GRID : DISPLAY.NONE }}>
        <FieldsetLegend title={title} />
        {children}
      </fieldset>
    </>
  );
}
