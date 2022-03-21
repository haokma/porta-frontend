import { useInfinitiScroll } from '@/hooks/use-infiniti-scroll';
import { useEffect, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const queryKey = `/api/blog`;
export default function App(props: any) {
  const ref = useRef();

  const { issues, isLoadingMore, isReachingEnd, isEmpty, isRefreshing, mutate, setSize, size } =
    useInfinitiScroll();

  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible && !isReachingEnd && !isRefreshing) {
      setSize(size + 1);
    }
  }, [isVisible, isRefreshing]);

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <p>
        showing {size} page(s) of {isLoadingMore ? '...' : issues.length} issue(s){' '}
        <button disabled={isRefreshing} onClick={() => mutate()}>
          {isRefreshing ? 'refreshing...' : 'refresh'}
        </button>
        <button disabled={!size} onClick={() => setSize(0)}>
          clear
        </button>
      </p>
      {isEmpty ? <p>Yay, no issues found.</p> : null}
      {issues.map((issue: any) => {
        return (
          <p
            key={issue?.id}
            style={{ margin: '20px 0', height: 300, backgroundColor: '#000', color: '#fff' }}
          >
            - {issue?.title}
          </p>
        );
      })}
      <div ref={ref}>{isLoadingMore ? 'loading...' : isReachingEnd ? 'no more issues' : ''}</div>
    </div>
  );
}
