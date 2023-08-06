import hasch from 'hasch';

export default function zeededChoose(seed, list) {
  return hasch(seed, {
    choose: list
  });
}
