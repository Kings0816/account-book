import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useModal } from '../../hooks/useModal';
import { methodState } from '../../recoil/method/atom';
import { categoryState } from '../../recoil/category/atom';
import { deleteCategory } from '../../lib/category';
import {
    dateFormat,
    CategoryFormat,
    ContentFormat,
    MethodFormat,
    CostFormat,
    formatValidator,
} from '../../utils/common/input-validator';

export const useCreateForm = (transaction, onCreate) => {
    const [activeCategory, setActiveCategory] = useState(false);
    const [activeMethod, setActiveMethod] = useState(false);
    const [inputs, setInputs] = useState(transaction);

    const methods = useRecoilValue(methodState);
    const [categories, setCategories] = useRecoilState(categoryState);

    const { openModal } = useModal();

    const categoriesInCostType = () => {
        return categories.filter((category) => category.sign === inputs.sign);
    };

    const handleCreateSubmit = (e) => {
        e.preventDefault();

        const validateFormats = [
            CategoryFormat,
            ContentFormat,
            MethodFormat,
            CostFormat,
            dateFormat,
        ];

        const { color, sign, ...targets } = inputs;
        let inValidCount = 0;
        Object.values(targets).forEach((target, index) => {
            const result = formatValidator(validateFormats[index], target);
            if (result !== '유효한 결과 값입니다.') inValidCount += 1;
        });
        // TODO null에 토스트창 띄우기
        inValidCount === 0 ? onCreate(inputs) : null;
    };

    const categoryActiveToggle = () => {
        setActiveCategory((prev) => !prev);
    };

    const methodActiveToggle = () => {
        setActiveMethod((prev) => !prev);
    };

    const changeSign = (sign) => {
        setInputs((prev) => ({ ...prev, sign }));
    };

    const changeDate = (e) => {
        setInputs((prev) => ({ ...prev, date: e.target.value }));
    };

    const changeCategory = (e) => {
        setInputs((prev) => ({ ...prev, category: e.target.innerText }));
        categoryActiveToggle();
    };

    const changeContent = (e) => {
        setInputs((prev) => ({ ...prev, content: e.target.value }));
    };

    const changeMethod = (e) => {
        setInputs((prev) => ({ ...prev, method: e.target.innerText }));
        methodActiveToggle();
    };

    const changeCost = (e) => {
        setInputs((prev) => ({ ...prev, cost: e.target.value }));
    };

    const removeCategory = async (id, e) => {
        e.stopPropagation();
        const complete = await deleteCategory(id);
        complete && setCategories((prev) => prev.filter((_prev) => _prev.id !== id));
    };

    const openCategoryCreateModal = () => {
        openModal('createCategory', { sign: '+', name: '', color: '' });
    };

    return [
        activeCategory,
        activeMethod,
        inputs,
        methods,
        categoriesInCostType,
        handleCreateSubmit,
        categoryActiveToggle,
        methodActiveToggle,
        changeSign,
        changeDate,
        changeCategory,
        changeContent,
        changeMethod,
        changeCost,
        removeCategory,
        openCategoryCreateModal,
    ];
};
