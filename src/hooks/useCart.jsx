import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addOrUpdateToCart, getCart, removeFromCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useCart() {
    const { uid } = useAuthContext();
    // uid 받아옴
    const queryClient = useQueryClient();
    
    const cartQuery = useQuery(['carts', uid || ''], () => getCart
    // 카츠 전체가 아닌 사용자별로 캐시가 이루어지도록 uid 설정
    (uid), {
        enabled: !!uid,
        // 사용자가 없는 경우에는 쿼리가 사용되지 않도록 옵션 설정
    });

    const addOrUpdateItem = useMutation(
        (product) => addOrUpdateToCart(uid, product),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['carts', uid]);
                // 모든 카츠가 아닌 사용자 uid에 한해서 인밸리데이트,
                // 불필요하게 모든 카츠들이 업데이트 되는 경우 방지 
            },
        }
    );

    const removeItem = useMutation((id) => removeFromCart(uid, id), {
        onSuccess: () => {
            queryClient.invalidateQueries(['carts', uid]);
        },
    }); 

    return { cartQuery, addOrUpdateItem, removeItem };
}