import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { methodState } from '../../recoil/method/atom';
import { categoryState } from '../../recoil/category/atom';
import { createCategory, deleteCategory } from '../../lib/category';

export const useUpdateForm = (transaction, onUpdate) => {
    const [activeCategory, setActiveCategory] = useState(false);
    const [activeMethod, setActiveMethod] = useState(false);
    const [inputs, setInputs] = useState(transaction);

    const methods = useRecoilValue(methodState);
    const [categories, setCategories] = useRecoilState(categoryState);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();

        const data = inputs;
        onUpdate(data);
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

    const addCategory = async () => {
        const newCategory = await createCategory();
        newCategory && setCategories((prev) => [...prev, newCategory]);
    };

    return [
        activeCategory,
        activeMethod,
        inputs,
        methods,
        categories,
        handleUpdateSubmit,
        categoryActiveToggle,
        methodActiveToggle,
        changeSign,
        changeDate,
        changeCategory,
        changeContent,
        changeMethod,
        changeCost,
        removeCategory,
        addCategory,
    ];
};
